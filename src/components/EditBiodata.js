import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const EditNameCard = () => {
    const person = useSelector(state => state.characters);

    const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="row">
                <div className="input-field col s4">
                    <input
                        value={person.name}
                        id="name"
                        type="text"
                        onChange={e => dispatch({type: 'CHANGE_NAME', payload: e.target.value})}/>
                    <label htmlFor="name" className="active">Name</label>
                </div>
                <div className="input-field col s4">
                    <input
                        value={person.pekerjaan}
                        id="pekerjaan"
                        type="text"
                        onChange={e => dispatch({type: 'CHANGE_PEKERJAAN', payload: e.target.value})}/>
                    <label htmlFor="pekerjaan" className="active">Pekerjaan</label>
                </div>
                <div className="input-field col s4">
                    <input
                        value={person.umur}
                        id="umur"
                        type="number"
                        onChange={e => dispatch({type: 'CHANGE_UMUR', payload: e.target.value})}/>
                    <label htmlFor="umur" className="active">Umur</label>
                </div>
            </div>
        </div>
    );
}

export default EditNameCard;