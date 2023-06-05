import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './styles.css';

class Menu extends React.Component {
  confirmRouteChange = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    Swal.fire({
      title: 'Deseja realmente ir para as configurações?',
      text: 'Se você sair da página atual, o timer será reiniciado.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'menu__swal-confirm-button',
        cancelButton: 'menu__swal-cancel-button',
      },
    }).then((result) => {
      if (result.value) {
        window.location.href = '/configurations';
      }
    });
  };

  render() {
    return (
      <header className="menu">
        <nav className="menu__nav">
          <h1 className="menu__logo">🍅 PomoApp</h1>
          <div className="menu__separator">
            <Link className="menu__link" to="/">
              Pomodoro
            </Link>
            <Link
              className="menu__link"
              to="/configurations"
              onClick={this.confirmRouteChange}
            >
              Configurações
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Menu;
