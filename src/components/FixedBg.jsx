const FixedBg = (props) => {
  return (
    <div className="fixed h-screen bg-cover">
        <img src={props.name} alt="Imagen fondo" />
    </div>
  )
}

export default FixedBg