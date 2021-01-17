import React, {Component} from 'react'
import Context from './Context';

class Provider extends Component {
    state = {
        menu: ['About me', 'Technologies', 'Projects'],
        project: 'My projects',
        contact: 'Contact',
        description: `Hey there! I am a junior web-developer, starting my journey with programming. 
        On that website you can find my most recent projects and technologies which I use. 
        I'm learning new things all the time and right now focusing on back-end technologies. 
        In case you would be interested to have me on your team or want me to do a project for you, feel free to contact.`,
    };

    render() {
        return (
            <Context.Provider
                value={{
                    menu: this.state.menu,
                    project: this.state.project,
                    contact: this.state.contact,
                    description: this.state.description,
                    changeLang: lang => {
                        if (lang === 'pl') {
                            this.setState({
                                menu: ['O mnie', 'Technologie', 'Projekty'],
                                project: 'Moje projekty',
                                contact: 'Kontakt',
                                description: `Cześć! Jestem poczatkujacym programista front-end, zaczynajacym przygode z 
                                programowaniem. Na tej stronie znajdziesz moje ostatnie projekty i technologie ktorych uzywam. 
                                Kazdego dnia ucze sie czegos nowego i obecnie skupiam sie na back-endzie. Jesli widzisz we mnie 
                                kandydata do Twojej firmy lub masz dla mnie jakies zlecenie, zapraszam do kontaktu.`,
                            })
                        }
                        else if (lang === 'de') {
                            this.setState({
                                menu: ['Über mich', 'Technologien', 'Projekte'],
                                project: 'Meine Projekte',
                                contact: 'Kontakt',
                                description: `Ich bin Junior Web-Entwickler und starte meine Karriere mit dem Programmieren. 
                                Auf dieser Website finden Sie meine neuesten Projekte und Technologien, die ich benutze. 
                                Jeden Tag lerne ich etwas Neues und gerade konzentiere ich mich auf Back-End Technologien. 
                                Wenn Sie sich mich als Teil Ihres Teams vorstellen können oder anderweitig einen Auftrag 
                                für mich haben, melden Sie sich gerne bei mir. Ich freue mich auf Ihre Nachricht.`,
                            })
                        }
                        else {
                            this.setState({
                                menu: ['About me', 'Technologies', 'Projects'],
                                project: 'My projects',
                                contact: 'Contact',
                                description: `Hey there! I am a junior web-developer, starting my journey with programming. 
                                On that website you can find my most recent projects and technologies which I use. 
                                I'm learning new things all the time and right now focusing on back-end technologies. 
                                In case you would be interested to have me on your team or want me to do a project for you, feel free to contact.`,
                            })
                        }
                    }
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider