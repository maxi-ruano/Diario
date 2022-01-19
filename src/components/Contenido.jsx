import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  conteiner: {
    margin: "20px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridTemplateRows: "repeat(3,auto)",
    gridGap: "15px",
  },
  img1: {
    widht: "50px",
    height: "250px",
  },
  img2: {
    height: "150px",
  },
  img3: {
    height: "240px",
  },
  img4: {
    height: "220px",
  },
  img6: {
    height: "250px",
  },
  h6: {
    color: "blue",
  },
}));

const Contenido = () => {
  const classes = useStyle();

  return (
    <div className={classes.conteiner}>
      <div>
        <img className={classes.img1} src="/images/presidencia.jpg " />
        <h3>
          Juntos por el Cambio suspendió <br></br>la reunión que el Gobierno no
          convocó Cruces entre oficialismo <br></br> y oposición
        </h3>{" "}
        <br></br>
        <img className={classes.img2} src="/images/canoso.jpeg" />
        <h4>Las excusas de Conte Grand La "Gestapo" macrista</h4>
        <br></br> <br></br>
        <h6 className={classes.h6}>JUSTICIA</h6>
        <h5>
          <img src="/images/nisman.jpg" />
          <br></br>A siete años de la muerte. La hipótesis del asesinato del
          fiscal Nisman sigue vigente en Israel
        </h5>
        <br></br>
        <h6 className={classes.h6}>DEPORTE </h6>
        <img className={classes.img7} src="/images/futbol.jpg" />
        <h5>
          Buen arranque. Boca estrenó el año con dos golazos y le ganó a Colo
          Colo:<br></br> al ataque y con la fuerza de los pibes
        </h5>
      </div>

      <div>
        <h2>
          Acuerdo con el FMI: Cafiero juega en su visita a Washington el apoyo
          de Joseph Biden al programa de Alberto Fernández
        </h2>
        <br></br>
        <h6>
          El canciller mantiene hoy un encuentro con el secretario de Estado,
          para aplacar las críticas de la administración demócrata a la política
          exterior del Presidente y para solicitar que la Casa Blanca respalde
          la estrategia de negociación con el FMI
        </h6>
        <img className={classes.img3} src="/images/alberto.jpg" />
        <br></br>
        <br></br>
        <br></br>
        <h6 className={classes.h6}>COVID-19 </h6>
        <h2>
          ¿Más dosis? ¿Cada cuánto nos vacunaremos? Las respuestas a tus nuevas
          preguntas sobre Covid-19
        </h2>
        <br></br>
        <h6>
          La escalada repentina de casos iniciada en diciembre, sumada la
          implementación del pase sanitario, provocaron una mayor demanda de
          dosis por parte de quienes dudaban y ansiedad entre quienes aguardan
          el refuerzo; lo que hay que saber para esta tercera ola
        </h6>
        <br></br>
        <h6 className={classes.h6}>FINANZAS </h6>
        <img className={classes.img8} src="/images/finanzas.jpg" />
        <h5> Qué es el staking de criptomonedas y cuánto se puede ganar</h5>
      </div>
      <div>
        <h4>
          Martín Guzmán: "El FMI va a perder legitimidad si empuja a Argentina a
          una situación desestabilizante"
        </h4>
        <img className={classes.img4} src="/images/guzman.jpg" />
        <br></br>
        <br></br>
        <h6 className={classes.h6}>JUSTICIA</h6>
        <h4>
          A dos años del crimen de Báez Sosa, cómo está la causa y qué pasó con{" "}
          <br></br>
          los rugbiers imputados <br></br>
          <br></br>
          <img className={classes.img5} src="/images/sosa.jpg" />
        </h4>{" "}
        <br></br>
        <h6 className={classes.h6}>COVID-19</h6>
        <img className={classes.img6} src="/images/covid.jpg" />
        <h5>
          Coronavirus. Cuáles son las condiciones que pide España para el
          ingreso de los argentinos al país
        </h5>
        <br></br>
        <h6 className={classes.h6}>COVID-19</h6>
        <img className={classes.img9} src="/images/fmi.jpg" />
        <h5>
          Deuda con el FMI. Larreta habló sobre la falta de convocatoria del
          Gobierno: “El plan económico es más importante que la reunión”
        </h5>
      </div>
    </div>
  );
};

export default Contenido;
