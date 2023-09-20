

const handleChange = (event: any) => { 
    const input = {
            name: event.target.name,
            value: event.target.value
        }

        console.log(input)
}

export default handleChange