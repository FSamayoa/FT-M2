import Card from './Card';

export default function Cards({ characters }) {
   // const onClose = () => window.alert("Emulamos que se cierra la card");
   return (
      <div>
         {characters.map(({ id, name, species, gender, origin, image }) => {
            return (
               <Card
                  key={id}
                  name={name}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  // onClose={onClose}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            );
         })}
      </div>
   );
}
