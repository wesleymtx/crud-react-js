import React from 'react';


class Controller extends React.Component{
  constructor(props){
    super(props)
    this.state = {valor: true}
  }
   refreshParent = () => {
     this.setState({})
   }
   render(){
     return (
       <div>
       
         <Form refreshParent={this.refreshParent}/>
       
         <Table/>
       </div>
     ) 
   }
 }
 
 class Table extends React.Component{
   remove = (e) => {
     console.dir(e)
     lista.splice(e, 1)
     this.setState({})
   }
   edit = (e) => {
     console.dir(e.target)
   }
   
  alunos = () => {
   return ( lista.map((aluno, index) => (
     <tr><td>{aluno.nome}</td><td>{aluno.nota}</td><td>{aluno.nota>=5 ? 'Aprovado' : 'Reprovado'} <button className="btn btn-danger" onClick={() => this.remove(index)}>Remover</button>
     </td></tr>
   ))
 )
  } 
 render(){
   return <table className="table"><th>Nome</th><th>Pontos</th><th>Resultado</th>     {this.alunos()}</table> 
 }
   
 }
 
 class Form extends React.Component{
   constructor(props){
     super(props)
     this.state = {nome: 'kkk', ponto: 5}
   }
   
   submit = (e) => {
     lista.push({nome: this.state.nome, nota: this.state.ponto})
     console.log(lista)
     this.props.refreshParent()
     
     e.preventDefault()
   } 
   changeName = (e) => {
     this.setState({nome: e.target.value})
   }
   changeScore = (e) => {
     console.log(e.target.value)
     this.setState({ponto: e.target.value})
   }
   
   render(){
     return (
      
       <form onSubmit={this.submit}>
         
      <div>
         <div className="col-2">
         <label>Nome</label> 
         <input type="text" class="form-control" value={this.state.nome} onChange={this.changeName} />
         </div>
         <div className="col-2">
         <label>Pontuação</label> 
         <input type="number"  class="form-control" value={this.state.ponto} onChange={this.changeScore}/>
         <input class="btn btn-primary my-2" type="submit" value="enviar"/>
         </div>
         
      </div>   
       </form>
     
   )
   }
 }
 
 const lista = [{nome: 'Wesley', nota: 10}, {nome: 'Wesley', nota: 8}, {nome: 'teste', nota: 4},]

 export default Controller;