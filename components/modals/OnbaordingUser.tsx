import { useState } from 'react';
import { useFormik, FormikHelpers } from 'formik';
import { useAppStore } from '@/store/store';
import * as Yup from 'yup';
import { updateDoc, doc } from 'firebase/firestore';
import { FirebaseDb } from '@/firebase';
import { toast } from 'react-hot-toast';

interface Values {
	displayName: string;
	regNo: string;
	collegeEmail: string;
	year: string;
	dept: string;
	phoneNumber: string;
}

const OnboardSchema = Yup.object().shape({
	displayName: Yup.string().required('Required'),
	regNo: Yup.string()
		.matches(/^[A-Z]{2}[0-9]{13}$/gi, 'Invalid reg no.')
		.required('Required'),
	collegeEmail: Yup.string()
		.email()
		.matches(/[a-z]{2}[0-9]{4}@srmist\.edu\.in/gi, 'Invalid college email')
		.required('Required'),
	year: Yup.string().required('Required'),
	dept: Yup.string().required('Required'),
	phoneNumber: Yup.string().required('Required'),
});

const onboardingContent = [
	{
		title: 'Full Name',
		description:
			'Your name is essential for us to address you properly and make your experience personal.',
	},
	{
		title: 'Email Address',
		description:
			'We will use your email to send you important event updates, notifications, and exclusive offers.',
	},
	{
		title: 'Phone Number',
		description:
			"In case of any event-related updates or emergencies, we may need to reach out to you. Don't worry, we'll only contact you when absolutely necessary.",
	},
	{
		title: 'College Register Number',
		description:
			'Please enter your unique register number assigned by your college/university. This will help us verify your eligibility for participation.',
	},
	{
		title: 'Department and Year of Study',
		description:
			'Let us know which department you belong to and the current year of your study. This information will help us tailor the event experience to your interests and academic level.',
	},
];
const OnbaordingUser = () => {
	const { user } = useAppStore();
	const [loading, setLoading] = useState(false);

	const handleOnboard = async (values: Values) => {
		try {
			setLoading(true);
			const docRef = doc(FirebaseDb, 'users', user!.uid);
			toast.promise(updateDoc(docRef, { ...values }), {
				loading: 'Onboarding...',
				success: 'Onboard successful, redirecting now!',
				error: 'Something went wrong!',
			});
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			toast.error('Unable to onboard. Try again later.');
		} finally {
			setLoading(false);
		}
	};

	const { handleChange, values, errors, handleSubmit } = useFormik({
		validationSchema: OnboardSchema,
		initialValues: {
			displayName: user?.displayName ?? '',
			regNo: '',
			collegeEmail: /[a-z]{2}[0-9]{4}@srmist\.edu\.in/g.test(user?.email!)
				? user?.email ?? ''
				: '',
			year: '',
			dept: '',
			phoneNumber: user?.phoneNumber ?? '',
		},
		onSubmit: handleOnboard,
	});
	return (
		<main className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 px-4 py-6 md:py-12 max-w-[90rem] mx-auto gap-12 relative'>
			<section className='px-4 md:px-0'>
				<h1 className='font-syne text-5xl font-bold'>
					Welcome to TechnoZest!
				</h1>
				<h2 className='font-syne text-2xl mt-8 font-semibold'>
					One More Step to Unlock the TechnoVerse
				</h2>
				<p className='text-md mt-4 text-justify'>
					Congratulations on logging in to TechnoZest, the ultimate
					tech fest experience! We&apos;re thrilled to have you on
					board. Before you can fully immerse yourself in the exciting
					world of technology and innovation, we just need a few more
					details from you.
				</p>
				<h2 className='font-syne text-2xl mt-8 font-semibold'>
					Let&apos;s Get to Know You Better!
				</h2>
				<p className='text-md mt-4 text-justify'>
					In order to ensure a seamless registration process and keep
					you updated on all the latest happenings at TechnoZest, we
					kindly request you to provide the following information:
				</p>
				<ul className='ml-4 list-disc text-md mt-4 flex flex-col gap-2 text-justify'>
					{onboardingContent.map((content, index) => (
						<li key={index}>
							<b>{content.title}</b>: {content.description}
						</li>
					))}
				</ul>
			</section>
			<section className='px-6 md:sticky top-12 h-fit'>
				<h2 className='font-syne text-5xl font-bold'>
					Alright! Let&apos;s get Started
				</h2>
				<form onSubmit={handleSubmit} className='w-full mt-8'>
					<div className='w-full flex flex-col font-syne gap-2'>
						<label
							htmlFor='displayName'
							className='flex items-center justify-between text-sm uppercase'
						>
							<span className='font-bold'>Full Name</span>
							<span className='text-orange-500'>
								{errors.displayName}
							</span>
						</label>
						<input
							type='text'
							id='displayName'
							onChange={handleChange}
							value={values.displayName}
							className={`${
								errors.displayName ? 'border-red-500' : ''
							} border w-full rounded-lg p-3 text-white bg-primary placeholder:text-white outline-transparent`}
							placeholder="What's your full name?"
						/>
					</div>
					<div className='w-full flex flex-col font-syne gap-2 mt-4'>
						<label
							htmlFor='regNo'
							className='flex items-center justify-between text-sm uppercase'
						>
							<span className='font-bold'>Register No</span>
							<span className='text-orange-500'>
								{errors.regNo}
							</span>
						</label>
						<input
							type='text'
							id='regNo'
							onChange={handleChange}
							value={values.regNo}
							className={`${
								errors.displayName ? 'border-red-500' : ''
							} border w-full rounded-lg p-3 text-white bg-primary placeholder:text-white outline-transparent`}
							placeholder="What's your register no?"
						/>
					</div>
					<div className='w-full flex flex-col font-syne gap-2 mt-4'>
						<label
							htmlFor='collegeEmail'
							className='flex items-center justify-between text-sm uppercase'
						>
							<span className='font-bold'>College Email</span>
							<span className='text-orange-500'>
								{errors.collegeEmail}
							</span>
						</label>
						<input
							type='email'
							id='collegeEmail'
							onChange={handleChange}
							value={values.collegeEmail}
							className={`${
								errors.displayName ? 'border-red-500' : ''
							} border w-full rounded-lg p-3 text-white bg-primary placeholder:text-white outline-transparent`}
							placeholder="What's your college email?"
						/>
					</div>
					<div className='w-full flex flex-col font-syne gap-2 mt-4'>
						<label
							htmlFor='dept'
							className='flex items-center justify-between text-sm uppercase'
						>
							<span className='font-bold'>Department</span>
							<span className='text-orange-500'>
								{errors.dept}
							</span>
						</label>
						<input
							type='text'
							id='dept'
							onChange={handleChange}
							value={values.dept}
							className={`${
								errors.displayName ? 'border-red-500' : ''
							} border w-full rounded-lg p-3 text-white bg-primary placeholder:text-white outline-transparent`}
							placeholder='Which department you belong to?'
						/>
					</div>
					<div className='w-full flex flex-col font-syne gap-2 mt-4'>
						<label
							htmlFor='phoneNumber'
							className='flex items-center justify-between text-sm uppercase'
						>
							<span className='font-bold'>Phone Number</span>
							<span className='text-orange-500'>
								{errors.phoneNumber}
							</span>
						</label>
						<input
							type='text'
							id='phoneNumber'
							onChange={handleChange}
							value={values.phoneNumber}
							className={`${
								errors.displayName ? 'border-red-500' : ''
							} border w-full rounded-lg p-3 text-white bg-primary placeholder:text-white outline-transparent`}
							placeholder="What's your phone number?"
						/>
					</div>
					<div className='w-full flex flex-col font-syne gap-2 mt-4'>
						<label
							htmlFor='year'
							className='flex items-center justify-between text-sm uppercase'
						>
							<span className='font-bold'>Year of Study</span>
							<span className='text-orange-500'>
								{errors.year}
							</span>
						</label>
						<input
							type='text'
							id='year'
							onChange={handleChange}
							value={values.year}
							className={`${
								errors.displayName ? 'border-red-500' : ''
							} border w-full rounded-lg p-3 text-white bg-primary placeholder:text-white outline-transparent`}
							placeholder='Which year are you in? eg: 1st year, ...'
						/>
					</div>
					<button
						type='submit'
						className='border px-10 text-lg uppercase py-2 mt-6 w-full rounded-lg bg-white text-primary font-extrabold hover:bg-primary hover:text-white  duration-300'
						disabled={loading}
					>
						{loading ? 'Onboarding...' : 'Submit'}
					</button>
				</form>
			</section>
		</main>
	);
};

export default OnbaordingUser;
