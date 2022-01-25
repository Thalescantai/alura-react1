function Titulo(props) {
    console.log(props);
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: red;
                font-size: 24px;
                font-weight: 600px;
            }
            `}</style>
        </>
    );
}




function HomePage() {
    return (<div>
        <Titulo tag="h2">Boas vindas de volta!</Titulo>
        <h2>Discord - Aula Matrix</h2>
        </div>
    )
}

export default HomePage