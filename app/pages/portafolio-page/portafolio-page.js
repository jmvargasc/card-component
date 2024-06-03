import { LitElement, html, css } from "lit";
import "../../components/card/card.js";
import "../../components/modal/modal.js"

export class PortafolioPage extends LitElement {
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

    img {
      width: 100%;
    }

    h1,
    p {
      margin: 0;
      color: white;
    }

    .col_about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
      padding: 1rem 0;
      align-items: center;
      justify-content: center;
      border: 2px solid #292929;
      padding: 1rem;
      border-radius: 1rem;
    }

    .col_about .info_about h1 {
      text-align: center;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .col_about .info_about p {
      line-height: 30px;
      margin-bottom: 0.5rem;
    }

    .col_about .info_about span {
      color: #47d16e;
      font-weight: bold;
    }

    .card-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .card-content .material-icons {
      font-size: 1.5rem;
      color: #47d16e;
    }

    .card-content h3 {
      margin: 0;
      color: white;
    }
    .section_Skills{
      margin:2rem;
    }
    .section_Skills h1{
      text-align:center;
      margin-bottom:1rem;
      color: #47d16e;
      font-weight:bold;
    }
    
  .card-content-job{
    background-color:red;
  }
   
  `;

static get properties() {
  return {
    skills: { type: Array },
    Softskills: { type: Array },
    experince: { type: Array },
    isModalOpen: { type: Boolean }, 
    selectedExperience: { type: Object }
  };
}

  constructor() {
    super();
    this.skills = [
      {
        name: "JavaScript",
        icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="58px"
          viewBox="0 -960 960 960"
          width="58px"
          fill="#e8eaed"
        >
          <path
            d="M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"
          />
        </svg>`,
      },
      {
        name: "HTML",
        icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path
            d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"
          />
        </svg>`,
      },
      {
        name: "CSS/SASS",
        icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path
            d="M414-360q-15 0-24.5-9.5T380-394v-46h48v32h104v-53H414q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T414-600h132q15 0 24.5 9.5T580-566v46h-48v-32H428v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T546-360H414Zm260 0q-15 0-24.5-9.5T640-394v-46h48v32h104v-53H674q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T674-600h132q15 0 24.5 9.5T840-566v46h-48v-32H688v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T806-360H674Zm-520 0q-15 0-24.5-9.5T120-394v-172q0-15 9.5-24.5T154-600h132q15 0 24.5 9.5T320-566v46h-48v-32H168v144h104v-32h48v46q0 15-9.5 24.5T286-360H154Z"
          />
        </svg>`,
      },
      {
        name: "TypeScript",
         icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path
            d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"
          />
        </svg>`,
      },
      { name: "Java/Spring Boot",  
      icon: html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="48px"
      viewBox="0 -960 960 960"
      width="48px"
      fill="#e8eaed"
    >
      <path
        d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"
      />
    </svg>`,},
      {
        name: "C# .Net",
        icon: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path
          d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"
        />
      </svg>`,
      },
      {
        name: "Angular",
        icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path
            d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"
          />
        </svg>`,
      },
      {
        name: "NodeJS",
        icon: html`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#e8eaed"
      >
        <path
          d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"
        />
      </svg>`,
      },
      {
        name: "MySQL",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"/></svg>`,
      },
      {
        name: "MongoBD",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"/></svg>`,
      },
      { name: "LitElement", 
       icon: html`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="48px"
      viewBox="0 -960 960 960"
      width="48px"
      fill="#e8eaed"
    >
      <path
        d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"
      />
    </svg>`, },
      {
        name: "Jenkins",
        icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path
            d="M166-120v-94h127L187-576q-32-15-50-40.5T119-684q0-47 34.5-81.5T235-800q44 0 73 23.5t39 62.5h146v-59q0-12 9-21t21-9q11 0 18.5 8.5T549-775l75-72q8-8 20.5-10.5T670-854l158 76q9 5 12.5 14t-1.5 19q-5 10-14.5 12t-18.5-3l-155-75-98 99v52l98 103 155-76q10-5 19-2.5t14 12.5q5 10 1.5 20T827-588l-153 72q-14 7-27 6.5T624-520l-75-72q0 14-7.5 21t-18.5 7q-12 0-21-9t-9-21v-60H345q0 12-6.5 24.5T323-609l205 395h158v94H166Zm69-508q24 0 40-16t16-40q0-24-16-40t-40-16q-24 0-40 16t-16 40q0 24 16 40t40 16Zm124 414h102L272-581q-3 2-10 4t-11 3l108 360Zm102 0Z"
          />
        </svg>`,
      },
      {
        name: "Jest,Cypress",
        icon: html`<svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e8eaed"
        >
          <path
            d="M480-180q72 0 123-50.5T654-353v-167q0-72-51-122.5T480-693q-72 0-123 50.5T306-520v167q0 72 51 122.5T480-180Zm-80-140h160v-60H400v60Zm0-173h160v-60H400v60Zm80 57h.5-.5.5-.5.5-.5.5-.5Zm0 316q-65 0-121-31t-83-89H160v-60h92q-7-26-7-52.5V-406h-85v-60h85q0-29 .5-57.5T254-580h-94v-60h120q14-28 37-49t51-35l-77-76 40-40 94 94q28-10 56.5-10t56.5 10l94-94 40 40-76 76q28 14 49.5 35.5T683-640h117v60h-94q9 28 8.5 56.5T714-466h86v60h-86q0 27 .5 53.5T708-300h92v60H685q-26 59-82.5 89.5T480-120Z"
          />
        </svg>`,
      },
    ];
    
    this.Softskills = [
      {
        name: "Trabajo en Equipo",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M0-240v-53q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z"/></svg>`,
      },
      {
        name: "Autodidacta",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M172-120q-41.78 0-59.39-39T124-230l248-280v-270h-52q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h320q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-52v270l248 280q29 32 11.39 71T788-120H172Zm-12-60h640L528-488v-292h-96v292L160-180Zm318-300Z"/></svg>`,
      },
      {
        name: "Responsabilidad",
        icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m434-255 229-229-39-39-190 190-103-103-39 39 142 142ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z"/></svg>`,
      },
      {
        name: "Adaptabilidad",
         icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm154-396Z"/></svg>`,
      },
      { name: "Pensamiento creativo",  
      icon: html`<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M490.74-349Q557-349 603-391.08T649-493q0-52-33.58-89T534-619q-42 0-72 27.5t-30 66.61q0 16.89 6.5 32.89t19.5 30l44-42q-5-3.5-7.5-8.75T492-524q0-14 11-24t31-10q23 0 39.5 18.5T590-492q0 35.19-28 59.59Q534-408 492-408q-51.2 0-86.6-40.5Q370-489 370-548.58 370-580 381.5-608t33.5-50l-43-43q-30 29-46.5 68.28-16.5 39.29-16.5 82.4 0 84.32 53.01 142.82T490.74-349ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Z"/></svg>`,},
     
    ];

    this.experince=[
      {
      name:'ORCA® GRC',
      position:'Front-end Jr',
      date:'Septiembre 2023 – Enero 2024',
      funciones:["Desarrollar interfaces de usuario eficientes y atractivas para aplicaciones web y móviles utilizando tecnologías como HTML, CSS, JavaScript, Angular, LitElement.","Colaborar con diseñadores y desarrolladores Back-end para garantizar una implementación coherente y eficaz de la interfaz de usuario","Proponer mejoras en la arquitectura y la tecnología utilizada."]
    },
    {
      name:'AMMFEC TECHNOLOGIES',
      position:'Front-end Jr',
      date:'Agosto 2022 – Septiembre 2023',
      funciones:["Mantenimiento y modificación de páginas web.",'Diseño, maquetación y conexión de API para sistemas de reservaciones hoteleras. Utilizando Figma, Angular, HTML, SASS, CSS, JavaScript y TypeScript.','Creación de chatbots con Node.js para mejorar la interacción y atención al cliente.']
    },

  ]

  this.isModalOpen = false; 
  this.selectedExperience = null; 
    
  }

  openModal(experience) {
    this.selectedExperience = experience;
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
    this.selectedExperience = null;
  }

  render() {
    return html`
      <section class="section_about">
        <div class="container">
          <div class="col_about">
            <div class="img_about">
              <img src="./app/source/img/about.jpg" alt="perfil" />
            </div>
            <div class="info_about">
              <h1>Acerca de mi</h1>
              <p>
                Soy un desarrollador Front-End con experiencia en desarrollo de
                aplicaciones web, páginas web, especializado en el framework
                Angular, entre otras tecnologías front-end, también tengo
                conocimientos de Backend. Me apasiona aprender cosas nuevas y
                mantenerme al día con las últimas tendencias del mundo del
                desarrollo.
              </p>
              <p>
                Siempre estoy abierto a nuevos retos y me encanta resolver
                proyectos que me permitan crecer profesionalmente. Disfruto
                explorando nuevas herramientas y técnicas para mejorar mis
                habilidades. Además de mi amor por la programación, me fascinan
                los gatos, son adorables. Estoy comprometido a ayudar a otros en
                el mundo de la programación. Siempre estoy dispuesto a compartir
                mis conocimientos y ayudar a quienes necesitan orientación o
                apoyo.
              </p>
              <span class="email">alankevingnz@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section_Skills">
        <div class="container">
          <div class="col_skills">
            <div class="title_skill">
              <h1>Skills</h1>
            </div>
            <card-components
              .items="${this.skills}"
              .renderItem="${(item) => html`
                <div class="card-content">
                  ${item.icon}
                  <h3>${item.name}</h3>
                </div>
              `}"
            ></card-components>
          </div>
        </div>
      </section>


      <section class="section_Skills">
        <div class="container">
          <div class="col_skills">
            <div class="title_skill">
              <h1>Soft Skills</h1>
            </div>
            <card-components
              .items="${this.Softskills}"
              .renderItem="${(item) => html`
                <div class="card-content">
                  ${item.icon}
                  <h3>${item.name}</h3>
                </div>
              `}"
            ></card-components>
          </div>
        </div>
      </section>

      <section class="section_Skills">
      <div class="container">
        <div class="col_skills">
          <div class="title_skill">
            <h1>Experiencia Laboral</h1>
          </div>
          <card-components
            .items="${this.experince}"
            .renderItem="${(item) => html`
              <div class="card-content-job">
                <h3>${item.name}</h3>
                <p>${item.position}</p>
                <p>${item.date}</p>
                <span @click="${() => this.openModal(item)}" >Saber mas..</span>
              </div>
            `}"
          ></card-components>
        </div>
      </div>
    </section>

    <modal-page
       type="personal"
      .content="${this.selectedExperience}"
      .open="${this.isModalOpen}"
      @close-modal="${this.closeModal}"
      
    ></modal-page>
  `;
  }
}

customElements.define("portafolio-page", PortafolioPage);
