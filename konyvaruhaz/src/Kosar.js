function Kosar(props) {
    /*HF:   + gomb ami értéket növel
            - gomb ami értéket csökkent
            töröl gomb, ami törli az elemet a kosárból
            ha már van az adott elem a kosárban akkor növeld meg meg az adott könyv darabszámát
    */
  return (
    <tr>
      <td>{props.kosar.szerzo}</td>
      <td>{props.kosar.cim}</td>
      <td>{props.kosar.ar}</td>
      <td>{props.kosar.db}</td>
    </tr>
  );
}

export default Kosar;
