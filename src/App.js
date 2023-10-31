import React from 'react';
import './App.css';

import Menu from './components/menu/Menu';
import Main from './components/main/Main';

export default class App extends React.Component {


  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() { //componentDidMount bir react metotu. Component render edilir edilmez hemen yapilmasi gereken isi baslatir.
    fetch('./assets/menu.json'//fetch API ile menu verilerinin oldugu json cekiliyor
    ).then(response => { 
      if (response.ok) { //islem basarili olursa state icinde yer alan menuData'ya aktariliyor. response=cevap demek.cevap ok ise response.json döndür.
        //ardindan da bu data verilerini setState ile menuData ya aktar.
        return response.json();
      }
        else {
          throw new Error('Menu verileri yuklenemedi.')   // burasi console da hata verdirtmeye yariyor.
        }
    })
    .then(data => {
    this.setState({
    menuData: data
})
    }
    );
  }


  render() {
  return (
    <div className="App">
      { this.state.menuData && <Menu menuData={this.state.menuData} /> } {/* menuData attribute'tur */}
      <Main text="Merhaba React!" title="Ana Sayfa" /> {/* text ve title attribute'tur veya key */}
    </div>
  );
}
}



