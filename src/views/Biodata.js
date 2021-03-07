import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import EditNameCard from '../components/EditBiodata';

const NameCard = () => {

    const person = useSelector(state => state.characters);

    const [isEdit,
        setEdit] = useState(false);

    const toggleEditBtn = () => {
        setEdit(!isEdit);
    }

    return (
        <section id="section-namecard">
            <h3 className="center-align white-text blue">Biodata</h3>
            <div className="card grey darken-1 namecard">
                <div className="card-content white-text">
                    <p className="card-title">{person.name}</p>
                    <p>Pekerjaan: {person.pekerjaan}</p>
                    <p>Umur: {person.umur}</p>
                    <button
                        onClick={toggleEditBtn}
                        className="btn-floating halfway-fab waves-effect waves-light orange">
                        {isEdit
                            ? (
                                <i className="material-icons">clear</i>
                            )
                            : (
                                <i className="material-icons">create</i>
                            )
}</button>
                </div>
            </div>
            {isEdit && <EditNameCard/>
}

        </section>
    );
}

export default NameCard;