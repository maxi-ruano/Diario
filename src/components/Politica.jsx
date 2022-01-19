import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  conteiner: {
    margin: "20px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridTemplateRows: "repeat(2,auto)",
    gridGap: "15px",
  },
  img1: {
    widht: "50px",
    height: "450px",
  },
  img2: {
    height: "450px",
  },
  img3: {
    height: "350px",
  },
  img4: {
    height: "220px",
  },
  img6: {
    height: "250px",
  },
  img9: {
    height: "300px",
  },
  img8: {
    height: "400px",
  },
  img10: {
    height: "450px",
  },
  h6: {
    color: "blue",
  },
}));

const Politica = () => {
  const classes = useStyle();

  return (
    <div className={classes.conteiner}>
      <div>
        <img className={classes.img1} src="/images/fmi2.jpg " />
        <h1>
          Negociación con el FMI: EEUU respaldó a Argentina y Cafiero reiteró la
          importancia del “crecimiento”
        </h1>
        <h5>
          El ministro de Relaciones Exteriores se reunió con el secretario
          <br></br> de Estado norteamericano, Antony Blinken, a los efectos de
          reiterarle que nuestro país “necesita crecer para poder pagar” la
          deuda al FMI. Desde Washington se mostraron afables a este planteo.
        </h5>
        <br></br>
        <h6 className={classes.h6}>JUEZ</h6>
        <img className={classes.img2} src="/images/juez.jpg" />
        <h2>
          Juez disparó contra Macri y Vidal: “No necesitas una Gestapo para
          perseguir delincuentes”
        </h2>
        <h5>
          El senador nacional de Córdoba criticó duramente a la “Gestapo
          antisindical”. También se refirió al 2023 y descartó una alianza entre
          Larreta y Schiaretti,
        </h5>
        <br></br> <br></br>
        <h6 className={classes.h6}>CONTE GRAND</h6>
        <h5>
          <img className={classes.img10} src="/images/contegrand.jpg" />
          <h2>
            Rechazan maniobra de Conte Grand para evitar preguntas sobre la
            Gestapo: se posterga su visita al Congreso
          </h2>
          El jefe de los fiscales bonaerense se excusó y pidió responder por
          escrito las preguntas sobre la Gestapo y las acusaciones que pesan en
          su contra. La subcomisión de Inteligencia parlamentaria bicameral
          rechazó el pedido y volvió a convocarlo para fin de mes.
        </h5>
        <br></br>
      </div>

      <div>
        <h2>
          ¿Cuánto falta para que el Covid-19 pase de pandemia a endemia según
          Pfizer?
        </h2>
        <br></br>
        <h6>
          El CEO de la compañía que produce una de las vacunas más caras contra
          la enfermedad volvió a estimar cuándo el coronavirus se convertiría
          oficialmente en una enfermedad endémica sin riesgo de muerte,
          comprable con patologías como la gripe.
        </h6>
        <img className={classes.img3} src="/images/covid19.jpg" />
        <br></br>
        <br></br>
        <br></br>
        <h6 className={classes.h6}>ENRE </h6>
        <img className={classes.img9} src="/images/enre.jpg" />
        <h2>
          El ENRE presentó cargos por $20 millones contra Edenor por las fallas
          en el servicio
        </h2>

        <h6>
          El Ente Nacional de Regulador de la Electricidad formuló la denuncia
          debido a los cortes que se produjeron la semana pasada y afectaron a
          más de 2 millones de clientes en la zona norte del AMBA que depende de
          la empresa concesionaria. Se espera la respuesta en los próximos días.
        </h6>
        <br></br>
        <h6 className={classes.h6}>FMI</h6>
        <img className={classes.img8} src="/images/cafiero.jpg" />
        <h2>
          Cafiero en EEUU: la agenda de reuniones con funcionarios en busca del
          apoyo de Biden con el FMI
        </h2>
        <h5>
          El Canciller se entrevista este mediodía en Washington con Antony
          Blinken y también tiene previsto reunirse con la legisladora líder
          demócrata Nancy Pelosi. El tema deuda y el acuerdo con el FMI no
          figura en la agenda el secretario del Departamento de Estado, pero
          allí está el foco.
        </h5>
        <br></br>
        <h6 className={classes.h6}>NISMAN</h6>
        <img className={classes.img6} src="/images/lagomarsino.jpg" />
        <h2>
          Lagomarsino sobre Nisman: "Si alguien lo llevó a esa situación se está
          cagando de risa"
        </h2>
        <h5>
          El dueño del arma que causó el fallecimiento del exfiscal de la causa
          AMIA pidió que se investigue a todos los que lo rodearon en sus
          últimas semanas de vida. Tambien habló acerca de como vive un nuevo
          aniversario y los relatos que se han hecho sobre su persona.
        </h5>
      </div>
    </div>
  );
};

export default Politica;
