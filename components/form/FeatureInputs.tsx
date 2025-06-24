"use client";

import { Input, Button } from "@heroui/react";
import { XIcon } from "lucide-react";

type Feature = {
  key: string;
  value: string;
};

type Props = {
  features: Feature[];
  setFeatures: (features: Feature[]) => void;
};

export default function FeatureInputs({ features, setFeatures }: Props) {
  const handleChange = (index: number, field: "key" | "value", newValue: string) => {
    const updated = [...features];
    updated[index][field] = newValue;
    setFeatures(updated);
  };

  const addFeature = () => {
    setFeatures([...features, { key: "", value: "" }]);
  };

  const removeFeature = (index: number) => {
    const updated = [...features];
    updated.splice(index, 1);
    setFeatures(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-md font-medium text-gray-200">Features</h3>
        <Button size="sm" onPress={addFeature} color="primary" variant="ghost">
          Agregar característica
        </Button>
      </div>

      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <Input
            placeholder="Clave (ej. Motor)"
            value={feature.key}
            onChange={(e) => handleChange(index, "key", e.target.value)}
            className="w-1/2"
          />
          <Input
            placeholder="Valor (ej. 250cc)"
            value={feature.value}
            onChange={(e) => handleChange(index, "value", e.target.value)}
            className="w-1/2"
          />
          <Button size="sm" variant="ghost" color="danger" onPress={() => removeFeature(index)}>
            <XIcon className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
