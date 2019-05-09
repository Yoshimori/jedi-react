import React from 'react';
import './listItem.scss'

import SlideToggle from "react-slide-toggle";

const ListItem = (props) => {
    return props.data.map( (item,i) => {
        return <SlideToggle duration={300} collapsed>
        {({ onToggle, setCollapsibleElement, progress }) => (
        <li className={'list-item'}>
            <span className={"list-item__header"} onClick={onToggle}> {item.name}</span>
   
        
            <div className={"list-item__content"} ref={setCollapsibleElement} style={{ overflow: 'hidden', transform: `translateY(${Math.round(20 * (-1 + progress))}px)`}}>
                <div class="flex-column">
                    <span>height: {item.height}</span>
                    <span> Mass: {item.mass}</span>
                    <span>Birth Year: {item.birth_year}</span>
                    <span>Gender: {item.gender}</span>
                </div>

                <div class="flex-column">
                    <span>Heir: {item.hair_color}</span>
                    <span>Skin: {item.skin_color}</span>
                    <span>Eye: {item.eye_color}</span>
                </div>

                <div>
                    <img alt="" src="https://picsum.photos/id/938/50/50"></img>
                </div>
            </div>
        </li>
          )}
        </SlideToggle>;
    })
}

export default ListItem;