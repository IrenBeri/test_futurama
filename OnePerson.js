import React, { useState, Component } from "react"
import css from "./OnePerson.module.css"

function OnePerson(props) {
    return (
        <div className={css.row}>
            <div className={css.imageContainer}>
                <img className={css.image} src={props.character.PicUrl} alt={props.character.Name} />
            </div>
            <div className={css.info}>

                <div>Name: </div>
                <div>{props.character.Name}</div>
                <div>Species: </div>
                <div>{props.character.Species}</div>
                <div>Age: </div>
                <div>{props.character.Age}</div>
                <div>Planet: </div>
                <div>{props.character.Planet}</div>
                <div>Profession: </div>
                <div>{props.character.Profession}</div>
                <div>Status: </div>
                <div>{props.character.Status}</div>
                <div>FirstAppearance: </div>
                <div>{props.character.FirstAppearance}</div>
                <div>Relatives: </div>
                <div>{props.character.Relatives}</div>
                <div>VoicedBy: </div>
                <div>{props.character.VoicedBy}</div>
            </div>
        </div>
    )
}

export default OnePerson