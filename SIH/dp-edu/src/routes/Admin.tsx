import Input from '../components/base/Input';
import Button from '../components/base/Button';
import Card from '../components/base/Card';
export default function Admin(){
return (
<section className="container py-8">
<h2 className="text-lg font-semibold">Admin/Teacher</h2>
<div className="mt-4 grid gap-6 md:grid-cols-2">
<Card className="p-5">
<h3 className="font-semibold">Create class</h3>
<div className="mt-3 space-y-3">
<Input placeholder="Class name" />
<Input placeholder="Grade" />
<Button>Create</Button>
</div>
</Card>
<Card className="p-5">
<h3 className="font-semibold">Assign module</h3>
<div className="mt-3 space-y-3">
<Input placeholder="Class" />
<Input placeholder="Module" />
<Button variant="secondary">Assign</Button>
</div>
</Card>
</div>
</section>
);
}

tailwind.config.js