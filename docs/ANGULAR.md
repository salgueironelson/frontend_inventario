## para generar componentes
ng g c web/inicio --skip-tests
ng g c web/nosotros --skip-tests
ng g c web/contactos --skip-tests
ng g c web/servicios --skip-tests

## para generar modulo auth
ng g m auth --routing 

## para crear los componentes para el modulo auth
ng g c auth/login --no-standalone --skip-tests
ng g c auth/register --no-standalone --skip-tests

## para generar modulo admin
ng g m admin --routing 

## para crear los componentes para el modulo auth
ng g c admin/perfil --no-standalone --skip-tests