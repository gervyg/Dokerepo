CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE todo (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre varchar(255) NOT NULL,
    descripcion varchar(255) NOT NULL,
    fecha DATE
);

INSERT INTO todo (nombre, descripcion, fecha) VALUES ('gg', 'First todo description', 'NOW()');
INSERT INTO todo (nombre, descripcion, fecha) VALUES ('gg2', '2 todo description', 'NOW()');
INSERT INTO todo (nombre, descripcion, fecha) VALUES ('gg3', '3 todo description', 'NOW()');
INSERT INTO todo (nombre, descripcion, fecha) VALUES ('gg4', '4 todo description', 'NOW()');


