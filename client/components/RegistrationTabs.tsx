import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function RegistrationTabs() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const redirectTo = params.get("from") || "/";

  const onSubmit = (role: string) => {
    localStorage.setItem("renova_registered", "true");
    localStorage.setItem("renova_role", role.toLowerCase());
    toast.success(`${role} registered`);
    navigate(redirectTo);
  };

  return (
    <Tabs defaultValue="user" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="user">User</TabsTrigger>
        <TabsTrigger value="rider">Rider</TabsTrigger>
        <TabsTrigger value="admin">Admin</TabsTrigger>
      </TabsList>
      <TabsContent value="user">
        <Card>
          <CardHeader>
            <CardTitle>Create a user account</CardTitle>
            <CardDescription>Request pickups and track status in real-time.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input placeholder="Your full name" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label>Phone</Label>
                <Input placeholder="+91 9xxxxxxxxx" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Address</Label>
              <Input placeholder="Street, City" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Password</Label>
                <Input type="password" />
              </div>
              <div className="grid gap-2">
                <Label>Confirm password</Label>
                <Input type="password" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => onSubmit("User")}>Create account</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="rider">
        <Card>
          <CardHeader>
            <CardTitle>Join as a rider</CardTitle>
            <CardDescription>Get job opportunities and help build a circular economy.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label>Name</Label>
              <Input placeholder="Your full name" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <Label>Phone</Label>
                <Input placeholder="+91 9xxxxxxxxx" />
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Vehicle type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cycle">Bicycle</SelectItem>
                    <SelectItem value="scooter">Scooter</SelectItem>
                    <SelectItem value="bike">Motorbike</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Max load (kg)</Label>
                <Input type="number" min={5} placeholder="e.g. 50" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Service area</Label>
              <Input placeholder="City / neighborhood" />
            </div>
            <div className="flex justify-end">
              <Button onClick={() => onSubmit("Rider")}>Apply</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="admin">
        <Card>
          <CardHeader>
            <CardTitle>Admin onboarding</CardTitle>
            <CardDescription>Manage warehouse, sorting, and recycling partners.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label>Organization name</Label>
              <Input placeholder="Company / NGO" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Admin email</Label>
                <Input type="email" placeholder="admin@example.com" />
              </div>
              <div className="grid gap-2">
                <Label>Contact phone</Label>
                <Input placeholder="+91 9xxxxxxxxx" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Warehouse location</Label>
              <Input placeholder="Street, City" />
            </div>
            <div className="flex justify-end">
              <Button onClick={() => onSubmit("Admin")}>Get access</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
