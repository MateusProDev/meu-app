const EventsComponents = () => {
    const handleEvent = (e) => {
        console.log(e)

        console.log('Enviado!');
    };

    return(
        <div>
            <div>
                <button onClick={handleEvent}>Enviar</button>
            </div>
        </div>
    );
};

export default EventsComponents;