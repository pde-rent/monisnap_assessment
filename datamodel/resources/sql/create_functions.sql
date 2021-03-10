
CREATE FUNCTION public.character_name_to_id(s varchar) returns bigint AS $$
BEGIN
    return (select ("id") from public.characters where name = s);
END;
$$ LANGUAGE plpgsql;

CREATE FUNCTION public.planet_name_to_id(s varchar) returns bigint AS $$
BEGIN
    return (select ("id") from public.planets where name = s);
END;
$$ LANGUAGE plpgsql;

CREATE FUNCTION public.species_name_to_id(s varchar) returns bigint AS $$
BEGIN
    return (select ("id") from public.species where name = s);
END;
$$ LANGUAGE plpgsql;
