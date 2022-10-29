import './App.css';
import Eu from './img/Eu.jpg'

function App() {
  return (
    <div className="App">
      <head>
        <title>Card</title>
        <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    <body>
        <div className="card">
            <div className="lines"></div>
            <div className="imgBx">
                <img src={Eu}/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>Jobson Emanoel<br/><span>Progamador
                    </span></h2>
                    <div className="data">
                        <h3>6<br/><span>Posts</span></h3>
                        <h3>3.000<br/><span>Seguidores</span></h3>
                        <h3>300<br/><span>Seguindo</span></h3>
                    </div>
                    <div className="actionBtn">
                        <button>Seguir</button>
                        <button>Mensagem</button>
                    </div>
                </div>
            </div> 
        </div>
    </body>
    </div>
  );
}

export default App;
