





// import { useEffect, useState } from 'react';
// import { useAuth } from '@/context/AuthContext';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { toast } from 'sonner';

// export default function ProfilePage() {
//   const { user, token, login } = useAuth();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   // Jab page load ho, to user ka naam aur email state mein daalein
//   useEffect(() => {
//     if (user) {
//       setName(user.name || '');
//       setEmail(user.email || '');
//     }
//   }, [user]);

//   const handleUpdateProfile = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/users/profile', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ name }),
//       });
//       const updatedUser = await response.json();
//       if (!response.ok) {
//         throw new Error(updatedUser.message || 'Failed to update profile');
//       }
      
//       // AuthContext ko naye user data se update karein
//       login(token!, updatedUser);
//       toast.success('Profile updated successfully!');
//       setIsEditing(false);

//     } catch (error: any) {
//       toast.error(error.message);
//     }
//   };

//   if (!user) {
//     return <div>Loading profile...</div>;
//   }

//   return (
//     <div className="container mx-auto py-10 min-h-[60vh]">
//       <h1 className="text-4xl font-bold">My Profile</h1>
//       <div className="mt-8 max-w-md space-y-6">
//         {isEditing ? (
//           <>
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email (cannot be changed)</Label>
//               <Input id="email" value={email} disabled />
//             </div>
//             <div className="flex gap-4">
//               <Button onClick={handleUpdateProfile}>Save Changes</Button>
//               <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="space-y-2">
//               <Label>Full Name</Label>
//               <p className="text-lg p-2 border rounded-md bg-secondary">{user.name}</p>
//             </div>
//             <div className="space-y-2">
//               <Label>Email</Label>
//               <p className="text-lg p-2 border rounded-md bg-secondary">{user.email}</p>
//             </div>
//             <div className="space-y-2">
//               <Label>Role</Label>
//               <p className="text-lg p-2 border rounded-md bg-secondary capitalize">{user.role}</p>
//             </div>
//             <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { user, token, login } = useAuth();
  
  // States ko form fields ke liye banayein
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Jab user data context se mile, to states ko update karein
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setMobile(user.mobile || '');
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, mobile }), // 'mobile' ko bhi bhejein
      });
      const updatedUser = await response.json();
      if (!response.ok) {
        throw new Error(updatedUser.message || 'Failed to update profile');
      }
      
      login(token!, updatedUser); // Context aur localStorage ko naye data se update karein
      toast.success('Profile updated successfully!');
      setIsEditing(false);

    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  return (
    <div className="container mx-auto py-10 min-h-[60vh]">
      <h1 className="text-4xl font-bold">My Profile</h1>
      <div className="mt-8 max-w-lg space-y-6">
        {isEditing ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (cannot be changed)</Label>
              <Input id="email" value={email} disabled className="w-full" />
            </div>
            <div className="flex gap-4">
              <Button onClick={handleUpdateProfile} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label>Full Name</Label>
              <p className="w-full text-lg p-2 border rounded-md bg-secondary">{user.name}</p>
            </div>
            <div className="space-y-2">
              <Label>Mobile Number</Label>
              <p className="w-full text-lg p-2 border rounded-md bg-secondary">{user.mobile || 'Not provided'}</p>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <p className="w-full text-lg p-2 border rounded-md bg-secondary">{user.email}</p>
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <p className="w-full text-lg p-2 border rounded-md bg-secondary capitalize">{user.role}</p>
            </div>
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          </>
        )}
      </div>
    </div>
  );
}