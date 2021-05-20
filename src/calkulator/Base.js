import React from "react";
import StoreButton from "./StoreButton";
import './Base.css'



class Base extends React.Component{
    constructor() {
        super();
        this.state={
            out:"0"
        }

this.refOutput=React.createRef()

    }

    tapeNumber(value){
        let curentValue=value
        let output=this.refOutput.current
        this.setState({out:curentValue})
        if (output.value==="0"){output.value=''}
        output.value+=curentValue
    }

    tapeOperation(value){
        let output=this.refOutput.current
        if (value ==='CE'){
            output.value=output.value.substring(0,output.value.length-1)
        }
        else if(value==='C'){output.value='0'}
        else if(value==='='){
            try{
                output.value=eval(output.value)}
            catch {output.value='Пиши нормально'
            setTimeout(()=>{
                output.value='0'
            },1500)}
            }
    }
    render() {
        return (
            <div className='container'>
                <div >
                    <input className='inputs' ref={this.refOutput} type="text" defaultValue={this.state.out}/>
                </div>
                <div>
                    {StoreButton.buttons.map((item,index) => <button key={index} className='but'
                        onClick={() => {
                            this.tapeNumber(item.num)
                        }}
                    >{item.num}</button>)}
                    {StoreButton.operation.map((item,index) => <button key={index} className='buts'
                        onClick={() => {
                            this.tapeOperation(item.num)
                        }}
                    >{item.num}</button>)}

                </div>
            </div>
        )
    }
}

export default Base;