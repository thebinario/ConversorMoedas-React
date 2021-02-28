import React, { Component } from 'react';

import './index.css'

export default class Converson extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor : 0,
            contacaoAtual: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter () {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`
        let baseUrl = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=y&apiKey=6b0a209e5deeff94cd6f`;
        
        fetch(baseUrl)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para].val;
                this.contacaoAtual = cotacao;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor)  * cotacao).toFixed(2)
                this.setState({moedaB_valor})
            })
    }


    render() {
        return ( <
            div className = "conversor" >

            <h2 > {this.props.moedaA} para {this.props.moedaB} </h2>
            <input type='text' onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
            <input type='button' value='Converter' onClick={this.converter}></input>
            <h2>
                {
                    this.state.moedaB_valor === 0 ? this.state.contacaoAtual  :this.state.moedaB_valor           }
            </h2>
             </div>
        )
    }
}