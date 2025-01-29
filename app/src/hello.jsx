const Hello = () => {
    const person = {
        name: 'Manish',
        age: 24,
        subject: 'Full-Stack Development'
    }
    const divTheme = {
        backgroundColor: '#000000',
        color: '#fff'
    }
    return (
        <div style={divTheme}>
            <p>Hello, I'm {person.name}</p>
            <p>I'm {person.age} years young</p>
            <p>I'm currently learning {person.subject}</p>
        </div>
    )
}

export default Hello;