const ChallengeComponents = () => {
    let numberUm = 56;
    let numberDois = 456

    return(
        <>
            <div>
                <button onClick={() => console.log(numberUm + numberDois)}>SOMAR</button>
            </div>
        </>
    );
};

export default ChallengeComponents;