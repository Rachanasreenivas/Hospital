// import { hospitals } from '@/app/data/Hospital';
// import { Metadata } from 'next';
// import HospitalPageClient from './HospitalPageClient';
// import { notFound } from 'next/navigation';
// import Script from 'next/script';

// // This function tells Next.js all the possible URL slugs for your hospitals.
// export async function generateStaticParams() {
//   return hospitals.map((hospital) => ({
//     slug: hospital.slug,
//   }));
// }

// // This function finds the hospital by its slug.
// async function getHospital(slug: string) {
//   const hospital = hospitals.find((h) => h.slug === slug);
//   return hospital;
// }

// // ✅ FIX: The props type is now defined inline to satisfy Next.js's build process.
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const hospital = await getHospital(params.slug);

//   if (!hospital) {
//     return { title: 'Hospital Not Found' };
//   }
  
//   const seo = hospital.seo;
//   const title = seo?.title || `${hospital.name} | CurePlus Hospitals`;
//   const description = seo?.description || `Details for ${hospital.name}.`;
//   const keywords = seo?.keywords || [hospital.name, hospital.location, 'hospital'];
//   const canonical = seo?.canonical || `https://cureplushospitals.com/hospital/${params.slug}`;

//   return {
//     title,
//     description,
//     keywords,
//     alternates: {
//       canonical: canonical,
//     },
//     openGraph: {
//       title,
//       description,
//       url: canonical,
//       images: hospital.imageUrl ? [{
//         url: `https://cureplushospitals.com${hospital.imageUrl}`,
//         alt: title,
//       }] : [],
//     },
//   };
// }

// // ✅ FIX: The props type is also defined inline here.
// const Page = async ({ params }: { params: { slug: string } }) => {
//   const hospital = await getHospital(params.slug);

//   if (!hospital) {
//     notFound();
//   }

//   return (
//     <>
//       {hospital.jsonLd && (
//         <Script
//           id="hospital-schema"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(hospital.jsonLd),
//           }}
//         />
//       )}
//       <HospitalPageClient hospital={hospital} />
//     </>
//   );
// };

// export default Page;

// /app/hospital/[slug]/page.tsx
// /app/hospital/[slug]/page.tsx

import HospitalPageClient from './HospitalPageClient';

// This page now simply renders the client component.
export default function Page() {
  return <HospitalPageClient />;
}