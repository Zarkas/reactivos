var React = require('react');

function SelectLanguage (props) {
    var languages = ['All', 'Jaavscript', 'Ruby', 'CSS', 'Java', 'Python'];
    return (
        <ul className='languages'>
            {languages.map((lang) => { 
                console.log(this);
                return (
                    <li 
                    style={ lang === props.selectedLanguage ? {color: '#d0021b' }:null } 
                    onClick={props.onSelect.bind(null, lang)}
                    key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}
SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSlect: PropTypes.func.isRequired,
}
class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
        };
        
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang){
        this.setState(function(){
            return {
                 selectedLanguage: lang,  
             }
        });
    }
    render() {
       

        return (
            <div>
                <SelectLanguage
                selectedLanguage={this.state.selectLanguage}
                onSelect={this.updateLanguage}
                />
            </div>
        )
    }
}

module.export = Popular;