import { NavLink } from "react-router-dom";
import './style.css';

const routes = [];

routes.push({
    to : "/home",
    title : "Home",
    style : ({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)
})

routes.push({
    to : "/contacto",
    title : "Contactos",
    style : ({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)
})

routes.push({
    to : "/detalle/",
    title : "Detalle del producto"
})

routes.push({
    to : "/lista",
    title : "Lista de productos"
})

function Menu() {
	return (
		<div>
			{/* Esto funciona, pero no es eficiente al escribir codigo, porque tengo que agregar a mano el #. Tambien estoy haciendo peticiones al backend con cada click. */}
			{/* <a href="/#/home" > Incio</a>
                <a href="/#/contacto" > contacto</a>
                <a href="/#/desconocido" > desconocido</a> */}

			{/* El link no necesita que se especifique el #, porque el HashRouter se lo agrega solo al link. */}
			{/* <Link to="/home" > Inicio </Link>
                <Link to="/contacto" > Contacto </Link>
                <Link to="/desconocido" > Desconocido </Link>
                <Link to="/detalle" > Detalle </Link>
                <Link to="/lista" > lista </Link> */}

			{/* En la version 6 se agrego el NavLink que es basicamente igual al Link, pero con unas funcionalidades de control de estado nativas. */}
			{/* <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)} to="/home">
				Inicio
			</NavLink>
			<NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)} to="/contacto">
				{' '}
				Contacto{' '}
			</NavLink>
			<NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)} to="/desconocido">
				{' '}
				Desconocido{' '}
			</NavLink>
			<NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)} to="/detalle">
				{' '}
				Detalle{' '}
			</NavLink>
			<NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'red' } : undefined)} to="/lista">
				{' '}
				lista{' '}
			</NavLink> */}

            {/* Version simplificada del codigo de arraiba */}
            {routes.map((ruta, index)=> (
                <NavLink 
                    key={`navlink-${index}`}
                    to={ruta.to}
                    style={ruta.style}
                    > 
                    {ruta.title} 
                </NavLink>
            ))}

            <NavLink 
                    to="/home"
                    className={({isActivate})=>{
                        return [isActivate ? "green" : "red", ]
                    }}
                    > 
                    Home 2 
                </NavLink>
		</div>
	);
}


export default Menu;
