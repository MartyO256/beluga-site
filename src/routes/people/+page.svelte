<script>
	import BelugaImage from '$lib/images/beluga-med.png';

	const faculty = [
		{
			name: 'Brigitte Pientka',
			affiliation: 'McGill University',
			homepage: 'http://www.cs.mcgill.ca/~bpientka/'
		}
	];

	const collaborators = [
		{
			name: 'Adreas Abel',
			affiliation: 'Chalmers and Gothenburg University',
			homepage: 'http://www2.tcs.ifi.lmu.de/~abel/'
		},
		{
			name: 'Amy Felty',
			affiliation: 'University of Ottawa',
			homepage: 'http://www.site.uottawa.ca/~afelty/'
		},
		{
			name: 'Dale Miller',
			affiliation: 'INRIA Futurs/École Polytechnique',
			homepage: 'http://www.lix.polytechnique.fr/Labo/Dale.Miller/'
		},
		{
			name: 'Alberto Momigliano',
			affiliation: 'University of Milan',
			homepage: 'http://momigliano.di.unimi.it/'
		},
		{
			name: 'Stefan Monnier',
			affiliation: 'Université de Montréal',
			homepage: 'http://www.iro.umontreal.ca/~monnier/'
		},
		{
			name: 'Aleksandar Nanevski',
			affiliation: 'IMDEA-Software',
			homepage: 'http://software.imdea.org/~aleks/'
		},
		{
			name: 'Frank Pfenning',
			affiliation: 'Carnegie Mellon University',
			homepage: 'http://www.cs.cmu.edu/~fp/'
		},
		{
			name: 'Carsten Schürmann',
			affiliation: 'IT University of Copenhagen',
			homepage: 'http://www.itu.dk/people/carsten/'
		}
	];

	const visitors = [
		{
			name: 'Nicolas Jeannerod',
			affiliation: 'École Normale Supérieure Paris',
			homepage: 'http://www.eleves.ens.fr/home/jeannero/'
		},
		{
			name: 'Agata Murawska',
			affiliation: 'IT University of Copenhagen',
			homepage: 'http://www.itu.dk/people/agmu/'
		}
	];

	const graduateStudents = [
		{
			name: 'Jacob Errington',
			degree: 'MSc'
		},
		{
			name: 'Aliya Hameer',
			degree: 'MSc'
		},
		{
			name: 'Stefan Knudsen',
			degree: 'MSc'
		},
		{
			name: 'David Thibodeau',
			degree: 'PhD',
			homepage: 'http://www.cs.mcgill.ca/~dthibo1/'
		}
	];

	const pastMcGillStudents = [
		{
			name: 'Andrew Cave',
			degree: 'PhD ABS',
			nowAt: 'Nuance',
			homepage: 'http://www.cs.mcgill.ca/~acave1/'
		},
		{
			name: 'Francisco Ferreira',
			degree: 'PhD',
			nowAt: 'Imperial College',
			homepage: 'http://www.cs.mcgill.ca/~fferre8/'
		},
		{
			name: 'Shawn Otis',
			degree: 'MSc'
		},
		{
			name: 'Olivier Savary-Belanger',
			degree: 'MSc',
			nowAt: 'Princeton',
			homepage: 'http://www.cs.mcgill.ca/~osavary/'
		},
		{
			name: 'Rohan Jacob-Rao',
			degree: 'MSc',
			nowAt: 'Digital Asset'
		}
	];

	const pastPostdocs = [
		{
			name: 'Matthias Puech',
			homepage: 'http://cs.mcgill.ca/~puech/'
		},
		{
			name: 'Tao Xue',
			homepage: 'http://www.cs.mcgill.ca/~taoxue/'
		},
		{
			name: 'Mathieu Boespflug',
			homepage: 'http://www.cs.mcgill.ca/~mboes/'
		},
		{
			name: 'Joshua Dunfield',
			homepage: 'http://www.mpi-sws.org/~joshua/'
		}
	];
</script>

<svelte:head>
	<title>Beluga Research Team</title>
</svelte:head>

<div class="px-5 py-3 my-4 bg-light rounded-3 clearfix">
	<img class="float-start" alt="Beluga Logo" src={BelugaImage} />
	<p class="lead">
		McGill's Computation and Logic (Complogic) Group is the team behind Beluga, focused on
		developing a theoretical and practical foundation for building and reasoning about software
		systems. Research areas include logic and programming languages, type theory, logical frameworks
		and software verification.
	</p>
</div>

<div class="row gx-5">
	<div class="col-lg-6">
		<h2>Faculty</h2>

		<div class="list-group list-group-flush mb-2">
			{#each faculty as member}
				<div class="list-group-item">
					<div class="fs-3">
						{#if member.homepage}
							<a href={member.homepage} target="_blank">{member.name}</a>
						{:else}
							{member.name}
						{/if}
					</div>
					{#if member.affiliation}
						<small>{member.affiliation}</small>
					{/if}
				</div>
			{/each}
		</div>

		<h2>Collaborators</h2>

		<div class="list-group list-group-flush mb-2">
			{#each collaborators as member}
				<div class="list-group-item">
					<div class="fs-3">
						{#if member.homepage}
							<a href={member.homepage} target="_blank">{member.name}</a>
						{:else}
							{member.name}
						{/if}
					</div>
					{#if member.affiliation}
						<small>{member.affiliation}</small>
					{/if}
				</div>
			{/each}
		</div>

		<h2>Visitors</h2>

		<div class="list-group list-group-flush mb-2">
			{#each visitors as member}
				<div class="list-group-item">
					<div class="fs-3">
						{#if member.homepage}
							<a href={member.homepage} target="_blank">{member.name}</a>
						{:else}
							{member.name}
						{/if}
					</div>
					{#if member.affiliation}
						<small>{member.affiliation}</small>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<div class="col-lg-6">
		<h2>Graduate Students</h2>

		<div class="list-group list-group-flush mb-2">
			{#each graduateStudents as student}
				<div class="list-group-item">
					<div class="fs-3">
						{#if student.homepage}
							<a href={student.homepage} target="_blank">{student.name}</a>
						{:else}
							{student.name}
						{/if}
						({student.degree})
					</div>
				</div>
			{/each}
		</div>

		<h2>Past McGill Students</h2>

		<div class="list-group list-group-flush mb-2">
			{#each pastMcGillStudents as student}
				<div class="list-group-item">
					<div class="fs-3">
						{#if student.homepage}
							<a href={student.homepage} target="_blank">{student.name}</a>
						{:else}
							{student.name}
						{/if}
						{#if student.nowAt}
							({student.degree}, now at {student.nowAt})
						{:else}
							({student.degree})
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<h2>Past Postdocs</h2>

		<div class="list-group list-group-flush mb-2">
			{#each pastPostdocs as student}
				<div class="list-group-item">
					<div class="fs-3">
						{#if student.homepage}
							<a href={student.homepage} target="_blank">{student.name}</a>
						{:else}
							{student.name}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
