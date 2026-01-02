export default function ServicesPage() {
  const services = [
    { title: "Boiler Installation", desc: "New high-efficiency boiler installs with warranty." },
    { title: "Boiler Repair", desc: "Diagnostics and quick repairs for most boiler brands." },
    { title: "Annual Service", desc: "Keep your system safe, efficient and compliant." },
    { title: "Landlord Gas Safety (CP12)", desc: "Certificates for landlords and agents." },
    { title: "Central Heating", desc: "Radiators, thermostats, powerflush and upgrades." },
  ];
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold">Services</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-slate-800 p-4">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
