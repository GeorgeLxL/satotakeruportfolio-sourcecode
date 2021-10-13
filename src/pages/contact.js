import React, {Component} from 'react';
import ScrollBanner from '../components/scroll';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

class Contact extends Component {
    state = {
        nameFocus: false,
        emailFocus: false,
        companyFocus: false,
        locationFocus: false,
        name: '',
        email: '',
        company: '',
        location: '',
        content: '',
        mailSuccess: false
    };
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    inputFocus = focusName => e=> {
        this.setState({
            [focusName]: true
        });
    }
    inputBlur = focusName => e=> {
        this.setState({
            [focusName]: false
        });
    }
    handleChange = fildName =>e=>{
        this.setState({
            [fildName]: e.target.value
        });
    }

    handleSubmit = e =>{
        e.preventDefault();

        if (this.state.name!=="" &&
        this.state.email!=="" &&
        this.state.company!=="" &&
        this.state.location!=="" &&
        this.state.content!=="") {

            const {
                name,
                email,
                company,
                location,
                content
            } = this.state;
    
            const message = {
                name,
                email,
                company,
                location,
                content
            };
            
            const config = {
                url: `${baseUrl}/message`,
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                data: message
            }

            axios(config )
                .then((response) => {
                    if (response.data.success) {
                        this.setState({
                            mailSuccess: true
                        })
                    }
                    else {
                        this.setState({
                            mailSuccess: false
                        })
                    }
                    this.resetForm();
                    document.getElementById('modal').classList.add('modal-show');
                })
                .catch(err => {
                    console.error(err);
                    this.setState({
                        mailSuccess: false
                    })
                    document.getElementById('modal').classList.add('modal-show');
                });
        }
        
    }

    resetForm = e=> {
        this.setState({name: '', email: '',company:'', location: '', content: ''})
        const inputs = document.querySelectorAll('input[type="text"]');
        var i;
        for (i=0;i<inputs.length;i++) {
            inputs[i].value="";
        }
        document.querySelector('input[type="email"]').value="";
        document.querySelector('textarea[name="content"]').value="";
    }

    modalBtnClick = e => {
        const modal = document.getElementById("modal");
        if (modal) {
            modal.classList.remove('modal-show');
        }
    }

    render() {
        const {nameFocus, emailFocus, companyFocus, locationFocus, name, email, company, location} = this.state;
        return (
            <main>
                <section className="banner contact-banner">
                    <div className="container">
                        <h1>If you are looking for a co-founder, company executive, <br />executive assistant, strategic advisor, technical talent, <br />developer, or even want to ask operational questions, <br />please contact me any time.</h1>
                        <ScrollBanner />
                    </div>
                </section>
                <section id="next" className="contact">
                    <div>
                        <div className="container">
                            <form onSubmit={this.handleSubmit}>
                                <div className="contact-card">
                                    <h2>Contact me</h2>
                                    <div className={nameFocus|| name!=="" ? "contact-input contact-input-focus":"contact-input"}>
                                        <label>Full name</label>
                                        <input type="text" onChange={this.handleChange("name")} onFocus={this.inputFocus("nameFocus")} onBlur={this.inputBlur("nameFocus")} />
                                    </div>
                                    <div className={emailFocus|| email!=="" ? "contact-input contact-input-focus":"contact-input"}>
                                        <label>Email address</label>
                                        <input type="email" onChange={this.handleChange("email")} onFocus={this.inputFocus("emailFocus")} onBlur={this.inputBlur("emailFocus")} />
                                    </div>
                                    <div className={companyFocus|| company!=="" ? "contact-input contact-input-focus":"contact-input"}>
                                        <label>Company name</label>
                                        <input type="text" onChange={this.handleChange("company")} onFocus={this.inputFocus("companyFocus")} onBlur={this.inputBlur("companyFocus")} />
                                    </div>
                                    <div className={locationFocus|| location!=="" ? "contact-input contact-input-focus":"contact-input"}>
                                        <label>Location</label>
                                        <input type="text" onChange={this.handleChange("location")} onFocus={this.inputFocus("locationFocus")} onBlur={this.inputBlur("locationFocus")} />
                                    </div>
                                    <textarea name="content" rows="5" onChange={this.handleChange("content")}></textarea>
                                    <input type="submit" value="Send message"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div id="modal">
                    <div className="modal-body">
                        <p>{this.state.mailSuccess? "Thank you for contacting me":"An error occurred sending message"}</p>
                        <button onClick={this.modalBtnClick}>OK</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;