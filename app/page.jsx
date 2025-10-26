import { supabase } from '../lib/supabaseClient';

export default async function HomePage() {
  const { data: teams, error } = await supabase.from('teams').select('*');
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Teams</h1>
      <ul>
        {teams?.map(team => (
          <li key={team.id}>{team.name} — {team.wins}-{team.losses}</li>
        ))}
      </ul>
    </div>
  );
}
