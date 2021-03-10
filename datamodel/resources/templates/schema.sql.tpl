-- GENERATED - DO NOT MODIFY

-- inspired from pg_dump: PostgreSQL database version 11.9 (Ubuntu 11.9-1.pgdg18.04+1)
-- Customized

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', 'public', false);
--SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';
SET default_with_oids = false;
SET TIMEZONE='GMT';

-- DROP EXISTING SCHEMA

DROP SCHEMA IF EXISTS public CASCADE;
DROP SCHEMA IF EXISTS audit CASCADE;

CREATE SCHEMA public;
CREATE SCHEMA audit;

-- schema permissions
GRANT USAGE ON SCHEMA public TO dbrw, dbr;
GRANT ALL PRIVILEGES ON SCHEMA public, audit TO dba;

-- public objects
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO dbrw;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dbrw, dba;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO dbrw, dba;
GRANT ALL PRIVILEGES ON ALL PROCEDURES IN SCHEMA public TO dbrw, dba;
GRANT ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA public TO dbrw, dba;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO dbrw, dba;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO dbr;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO dbr;
GRANT EXECUTE ON ALL PROCEDURES IN SCHEMA public TO dbr;
GRANT EXECUTE ON ALL ROUTINES IN SCHEMA public TO dbr;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO dbr;

-- audit objects
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA audit TO dba;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA audit TO dba;
GRANT ALL PRIVILEGES ON ALL PROCEDURES IN SCHEMA audit TO dba;
GRANT ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA audit TO dba;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA audit TO dba;

${create_types}
