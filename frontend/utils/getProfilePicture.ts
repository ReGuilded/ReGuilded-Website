export async function getProfilePicture(guildedId: string) {
  const response = await fetch(
    `https://guilded.gg/api/users/${guildedId}/profilev3`
  );
  const user = await response.json();
  return user.profilePicture;
}
