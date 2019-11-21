import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function PillarEdits(props) {

    const [pillar, setPillar] = useState({
        id: '',
        pillar: ''
    });

    useEffect(() => {
        api()
            .get(`/api/pillars/${props.match.params.id}`)
            .then(res => {
                setPillar(res.data)
            })
            .catch(err => {
                console.log('Pillar edit error', err)
            });
    }, [props.match.params.id]);

    const handleChange = (event) => {
        setPillar({
            ...pillar,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        api()
            .put(`/api/pillars/${props.match.params.id}`, pillar)
            .then(res => {
                props.history.push('/accounthome')
            })
            .catch(err => {
                console.log('Error with edit put req', err)
            });
    };

    return (
        <>
            <h1>Update Pillar</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='pillar'
                /><br />
                <button type='submit'>Save</button>
            </form>
        </>
    );
};

export default PillarEdits;