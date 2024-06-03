import { LitElement, html, css } from "lit";

export class PooPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      background-color: #171718;
      padding: 1rem 0;
    }

    .container {
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
    }

    h1,
    p {
      margin: 0;
      color: white;
    }
    p {
      line-height: 25px;
    }
    h1,
    h2 {
      color: #47d16e;
      margin-bottom: 0.5rem;
    }

    .pagination-buttons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }

    .pagination-buttons {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
    }
    span {
      color: #ae30ba;
      font-weight: bold;
    }
    ul p {
      margin: 1rem 0;
    }
  `;

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  get paginatedItems() {
    const inicio = this.page * this.numPage;
    const final = inicio + this.numPage;
    return this.ejercicios.slice(inicio, final);
  }

  nextPage() {
    if ((this.page + 1) * this.numPage < this.ejercicios.length) {
      this.page += 1;
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 1;
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>¿Que es POO?</h1>
        <section class="poo">
          <h2>Qué es la Programación Orientada a Objetos</h2>
          <p>
            La Programación Orientada a Objetos (POO) es un paradigma de
            programación, es decir, un modelo o un estilo de programación que
            nos da unas guías sobre cómo trabajar con él. Se basa en el concepto
            de clases y objetos. Este tipo de programación se utiliza para
            estructurar un programa de software en piezas simples y
            reutilizables de planos de código (clases) para crear instancias
            individuales de objetos.
          </p>
        </section>

        <section class="pilares">
          <h2>Los pilares de la programación orientada a objetos</h2>
          <div class="pilares">
            <ul>
              <li>
                <span>Abstracción:</span>
                <p>
                  La abstracción consiste en simplificar la complejidad de un
                  sistema mediante la identificación de las partes esenciales y
                  la omisión de los detalles no esenciales. En POO, los objetos
                  actúan como abstracciones que modelan entidades del mundo real
                  y sus interacciones.
                </p>
              </li>

              <li>
                <span>Polimorfismo:</span>
                <p>
                  El polimorfismo permite que un objeto tome muchas formas. En
                  el contexto de la POO, se refiere a la capacidad de objetos de
                  diferentes clases de responder a un mismo mensaje de manera
                  única. Esto facilita la flexibilidad y la adaptabilidad del
                  código. Este pilar apunta a cambiar el comportamiento de un
                  objeto por sobrecarga o por sobrescritura de métodos.
                </p>
              </li>

              <li>
                <span>Encapsulamiento:</span>
                <p>
                  El encapsulamiento es la capacidad de decidir qué partes de
                  una clase (atributos y métodos) serán expuestas hacia otras
                  entidades y cuáles se mantendrán ocultas. Este pilar busca
                  controlar la visibilidad y accesibilidad de los detalles
                  internos de una clase.
                </p>
              </li>

              <li>
                <span>Herencia:</span>
                <p>
                  Es la capacidad de transferir características propias como
                  atributos y métodos de una objeto a otro. Este pilar apunta a
                  la reutilización de código existente.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section class="bases">
          <h2>Conceptos base de la programación orientada a objetos</h2>
          <div class="pilares">
            <ul>
              <li>
                <span>Clase:</span>
                <p>
                  Una clase es una plantilla para la creación de objetos según
                  un modelo definido. Una clase está compuesta de atributos y
                  métodos.
                </p>
              </li>

              <li>
                <span>Objeto:</span>
                <p>
                  El objeto como tal es la instancia de una clase, es decir, es
                  la pieza de software que nace a través de la plantilla.
                </p>
              </li>

              <li>
                <span>Atributos:</span>
                <p>
                  Los atributos son las características individuales que
                  diferencian un objeto de otro, estos determinan su apariencia,
                  estado u otras cualidades.
                </p>
              </li>

              <li>
                <span>Métodos:</span>
                <p>
                  Los métodos son una especificación de acciones que puede
                  realizar el objeto.
                </p>
              </li>

              <li>
                <span>Constructor:</span>
                <p>
                  Un constructor es básicamente un método que se ejecuta
                  automáticamente a la hora de instanciar un objeto para su
                  configuración.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section class="bases">
          <h2>Conceptos extendidos de POO</h2>
          <div class="mas">
            <ul>
              <li>
                <span>Clase abstracta:</span>
                <p>
                  Es una clase pensada en la herencia y el polimorfismo. En las
                  clases abstractas debemos definir al menos un método
                  abstracto, de manera que las clases derivadas, hereden e
                  implementen los métodos abstractos. Las clases abstractas no
                  se pueden instanciar, solo heredar y siempre que definimos un
                  método abstracto, la clase debe ser abstracta.
                </p>
              </li>

              <li>
                <span>Interfaces:</span>
                <p>
                  Las interfaces cumplen la función de definir contratos dentro
                  del código. Las interfaces moldean definiciones que una clase
                  debe cumplir e implementar. Estas reglas aplican tanto en
                  métodos como en propiedades dependiendo del lenguaje de
                  programación.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define("poo-page", PooPage);
