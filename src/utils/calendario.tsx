
function Calendario(){
    const meses = [ 'janeiro', 'fevereiro', 'março', 'abril'
                    , 'maio', 'junho', 'julho', 'agosto', 
                    'setembro', 'outubro', 'novembro', 'dezembro'];

    var dias = [];
    for(var i = 1; i<=31; i++)
        dias.push(i);

    var currentTime = new Date()
    var anos = [];
    for(i = currentTime.getFullYear(); i>=1900; i--)
        anos.push(i);
    

    return( 
        <>

            <select id="mes" name="mes" placeholder="mes" className="mes">
                { meses.map(item => {
                    return(
                        <option value={item}>{item}</option>
                    );
                }) }
            </select>

            <select id="dia" name="dia" placeholder="dia" className="dia">
                { dias.map(item => {
                    return(
                        <option value={item}>{item}</option>
                    );
                }) }
            </select>

            <select id="ano" name="ano" placeholder="ano" className="ano">
                { anos.map(item => {
                    return(
                        <option value={item}>{item}</option>
                    );
                }) }
            </select>

        </>
        );
};

export default Calendario;