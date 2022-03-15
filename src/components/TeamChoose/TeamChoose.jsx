import Homepage from "../Homepage";
import WebTeam from "../WebTeam/WebTeam";
import './TeamChoose.css';

const DATA_MOCK_WEB_TEAM = {
    title: 'WEB TEAM',
    subtitle: 'BLAZING FAST WEB',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    subdescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
}

const DATA_MOCK_MOBILE_TEAM = {
    title: 'WEB MOBILE TEAM',
    subtitle: 'BLAZING FAST WEB',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    subdescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
}

const TeamChoose = ({handlePage}) => {
    return (
        <>
            <button className="button_item button_previous" onClick={() => handlePage(<Homepage handlePage={handlePage}/>)}></button>
            <section id="webTeam">
                <div className="page">
                    <div className="coose_block">
                        <p>WEB TEAM</p>
                        <p>ALBUM</p>
                        <button className="choose_button" onClick={() => handlePage(<WebTeam handlePage={handlePage} team={'webprofiles'} dataMock={DATA_MOCK_WEB_TEAM}/>)}>Open</button>
                    </div>
                </div>
                <div className="page">
                    <div className="coose_block">
                        <p>MOBILE TEAM</p>
                        <p>ALBUM</p>
                        <button className="choose_button" onClick={() => handlePage(<WebTeam handlePage={handlePage} team={'mobileprofiles'} dataMock={DATA_MOCK_MOBILE_TEAM}/>)}>Open</button>
                    </div>
                </div>
            </section>
            <button className="button_hidden button_item"></button>
        </>
    );
}

export default TeamChoose;