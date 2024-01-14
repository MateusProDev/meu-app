const EventsComponents = () => {
    const handleEvent = () => {
        console.log('Enviado!');
    };

    return(
        <div>
            <div>
                <button onClick={handleEvent}>Enviar</button>
            </div>
            <div>
                <button onClick={() => console.log('Enviado!')}>Enviar</button>
            </div>
        </div>
    );
};

export default EventsComponents;