function skillsMember(memberName, skillsArray) {
    // This function takes a member's name and an array of skills
    // and returns a formatted string that lists the member's skills.
  
    if (!memberName || !skillsArray || skillsArray.length === 0) {
      return "Invalid input or no skills provided.";
    }
  
    const skillsList = skillsArray.join(', '); // Join skills with commas
  
    return `${memberName} has the following skills: ${skillsList}.`;
  }