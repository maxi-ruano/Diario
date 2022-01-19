import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  conteiner: {
    margin: "20px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridTemplateRows: "repeat(2,auto)",
    gridGap: "10px",
  },
  img1: {
    widht: "100%",
    height: "580px",
  },
  img2: {
    height: "487px",
  },
  img3: {
    height: "240px",
  },
  img4: {
    height: "220px",
  },
  img5: {
    height: "485px",
  },
  img6: {
    height: "285px",
  },
  img8: {
    height: "250px",
  },
  h6: {
    color: "blue",
  },
  h4: {
    color: "red",
  },
}));

const Deporte = () => {
  const classes = useStyle();

  return (
    <div className={classes.conteiner}>
      <div>
        <img className={classes.img1} src="/images/rojo2.jpg " />
        <h2>Al fin, Independiente: llegó el primer refuerzo para Domínguez </h2>
        <h6>
          El Rojo le ganó la puja a Boca y el flamante DT tendrá su primera
          incorporación en este mercado. Era el único de los grandes que no
          había sumado a nadie aún.
        </h6>
        <br></br>
        <br></br>
        <h5 className={classes.h6}>ARGENTINA</h5>
        <img className={classes.img2} src="/images/descarga.jpg" />
        <h2>
          Expectativa total por el Chile-Argentina en Calama: temperatura y
          precios por las nubes
        </h2>
        <br></br>
        <h5 className={classes.h6}>MESSI</h5>
        <img className={classes.img5} src="/images/messi5.jpg" />
        <h1>Messi volvió a entrenar con normalidad en el PSG</h1>
        <h5>
          La imagen era fuerte. Si bien ya había dejado atrás su contagio de
          Coronavirus y se encontraba en plenitud física, el Paris Saint Germain
          el pasado viernes difundió un video del entrenamiento del primer
          equipo, en el cual se podía ver a un Lionel Messi algo desanimado y
          observando las acciones desde afuera. Bueno, la eterna espera culminó
          y este martes el Diez volvió a practicar con normalidad, a la par de
          sus compañeros.
        </h5>
      </div>

      <div>
        <h2>Cumple íntimo: Gallardo de San Martín a Baires</h2>
        <br></br>
        <h6>
          El Muñeco celebró sus 46 años de vida rodeado de seres queridos y
          mucho afecto: River lo agasajó en familia y luego disfrutó con su
          círculo más íntimo.
        </h6>
        <img className={classes.img3} src="/images/gallardo3.jpg" />
        <br></br>
        <br></br>
        <br></br>
        <h6 className={classes.h6}>BOCA </h6>
        <img className={classes.img6} src="/images/pol.jpg" />
        <h2> Pol, listo para volver: ahora negocian Boca y Cruz Azul</h2>
        <h6>
          Parecía que su regreso se frustraba. Que la decisión de Guillermo
          Fernández de seguir en Cruz Azul por seis meses más, hasta quedar
          libre, cerraba la puerta por lo menos hasta junio. Sin embargo, Pol
          tuvo que venir a la Argentina por asuntos personales y, de repente, su
          posible vuelta se reflotó. Riquelme insistió, el volante se convenció,
          dio el OK para que el Consejo negociara con los mexicanos y podría
          decirse que su vuelta ahora sí está encaminada.
        </h6>
        <br></br>
        <h6 className={classes.h6}>QATAR </h6>
        <img className={classes.img8} src="/images/qatar.jpg" />
        <h5>
          Los fanáticos de las selecciones pueden comenzar desde este miércoles
          a registrarse para participar de los sorteos que les permita adquirir
          entradas para los partidos del Mundial de Qatar, con precios que
          arrancan en unos 70 dólares para los extranjeros. Ese precio es un
          tercio inferior al de los tickets de Rusia 2018.
        </h5>
        <br></br>
        <h6 className={classes.h6}>RIVER/SAN LORENZO </h6>
        <img className={classes.img8} src="/images/bustos.jpg" />
        <br></br> <br></br>
        <h2>Sin respuesta por Bustos, River se mueve por otro lateral</h2>
        <h5>
          "Por Bustos no esperamos más”. Si la tajante definición de los
          dirigentes de River tiene su correlato en la realidad se podrá
          comprobar con el transcurrir de los hechos. Por lo pronto, además de
          hacer conocer públicamente la postura del club frente a las sucesivas
          propuestas rechazadas por el lateral derecho de Independiente que era
          (es) una prioridad para el Muñeco Gallardo, empezar a hacer
          movimientos en otra dirección. Y en esa línea estuvo el mensaje de
          Enzo Francescoli a Mauro Cetto avisándole que en los próximos días se
          iba a comunicar con él.
        </h5>
      </div>
    </div>
  );
};

export default Deporte;
