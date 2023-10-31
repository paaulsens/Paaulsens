const Hr = ({legend} : {legend: string}) => {
    
    return(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{flex: 1, height: '1px', backgroundColor: '#121212'}} />

                <div>
                    <p style={{width: '70px', textAlign: 'center'}}>{legend}</p>
                </div>

            <div style={{flex: 1, height: '1px', backgroundColor: '#121212'}} />
        </div>
    )
}

export default Hr