import React from "react";
import Card from "@/components/ui/Card";
import HomeDoctor from "./HomeDoctor";
import DoctorDetails from "@/components/partials/Table/react-table-Doctor";

const Doctor = () => {

  return (
    <div>
      <HomeDoctor title="Doctors" />
      <div className="lg:col-span-12 col-span-12">
        <Card >
          <DoctorDetails />
        </Card>
      </div>
    </div>
  );
};

export default Doctor;



