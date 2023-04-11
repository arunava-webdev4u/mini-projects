import React from 'react'
import '../css/NameList.css'

function calc (obj) {
    let a1 = new Date(obj.dob).getDate();
    let a2 = new Date(obj.dob).getMonth();
    let b1 = new Date().getDate();
    let b2 = new Date().getMonth();
    let ans = 'not-same';
    // console.log(a1, a2);
    // console.log(b1, b2);
    if (a1 == b1 && a2 == b2) return 'same';
    return ans;
}


function NameList(props) {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
        const obj = JSON.parse(localStorage.getItem(i));
        if (props.today) {
            if (calc(obj) == 'same')
                list.push(
                    <div className='display-card' id={calc(obj)} key={obj.id}>
                        <div className='display-cards-name'>{obj.name}</div>
                        <div className='display-cards-dob'>{obj.dob}</div>
                    </div>
                );
        } else {
            if (calc(obj) == 'not-same')
                list.push(
                    <div className='display-card' id={calc(obj)} key={obj.id}>
                        <div className='display-cards-name'>{obj.name}</div>
                        <div className='display-cards-dob'>{obj.dob}</div>
                    </div>
                );
        }
    }
    // console.log(list)
    return (
        <div>{list}</div>
    )
}

export default NameList