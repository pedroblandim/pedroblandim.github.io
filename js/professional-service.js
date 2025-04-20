export async function getProfessionals(query, specialty) {
  const response = await fetch("./static/professionals.json");
  const professionals = await response.json();

  const queryFilter = (professional) => {
    return professional.name.toLowerCase().includes(query.toLowerCase()) ||
      professional.specialty.toLowerCase().includes(query.toLowerCase())
  }

  const specialtyFilter = (professional) => {
    return professional.specialty.toLowerCase().includes(specialty.toLowerCase())
  }

  if (!query && !specialty) return professionals;

  if (query && specialty) {
    return professionals.filter(
      (professional) =>
        queryFilter(professional) && specialtyFilter(professional)
    );
  }

  if (query) return professionals.filter(queryFilter);

  if (specialty) return professionals.filter(specialtyFilter);
  
}
