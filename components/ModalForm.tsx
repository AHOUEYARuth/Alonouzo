import React, { useState, useEffect } from "react";
import FormField from "@/components/FormField";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nom: string;
  prenoms: string;
  email: string;
  profession: string;
  raison: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenoms: "",
    email: "",
    profession: "",
    raison: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  // Réinitialiser les états lorsque le modal s'ouvre
  useEffect(() => {
    if (isOpen) {
      setError("");
      setSuccess(false);
      setFormData({
        nom: "",
        prenoms: "",
        email: "",
        profession: "",
        raison: "",
      });
    }
  }, [isOpen]);

  // Effet pour fermer le modal automatiquement après 5 secondes si succès
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (success) {
      timer = setTimeout(() => {
        onClose();
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [success, onClose]);

  // Gestion des changements de champ
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Fonction pour sauvegarder dans localStorage
  const saveToLocalStorage = (data: FormData) => {
    try {
      // Récupérer les données existantes du localStorage
      const existingDataStr = localStorage.getItem("boutiqueRequests");
      let existingData: FormData[] = [];

      if (existingDataStr) {
        existingData = JSON.parse(existingDataStr);
      }

      // Ajouter les nouvelles données
      existingData.push(data);

      // Sauvegarder le tableau mis à jour
      localStorage.setItem("boutiqueRequests", JSON.stringify(existingData));

      return true;
    } catch (error) {
      console.error(
        "Erreur lors de l'enregistrement dans localStorage:",
        error
      );
      return false;
    }
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification si tous les champs sont remplis
    const { nom, prenoms, email, profession, raison } = formData;
    if (!nom || !prenoms || !email || !profession || !raison) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    // Réinitialiser l'erreur
    setError("");

    // Sauvegarder dans localStorage
    const saveResult = saveToLocalStorage(formData);

    if (saveResult) {
      // Afficher le message de succès
      setSuccess(true);
    } else {
      setError("Une erreur est survenue lors de l'enregistrement des données");
    }
  };

  // Si le modal n'est pas ouvert, on ne rend rien
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {success ? (
          // Affichage du message de succès
          <div
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                color: "green",
                marginBottom: "15px",
              }}
            >
              ✓
            </div>
            <h2 style={{ color: "green" }}>Demande enregistrée avec succès!</h2>
            <p>Nous avons bien reçu votre demande de création de boutique.</p>
            <p style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
              Cette fenêtre se fermera automatiquement dans quelques secondes...
            </p>
          </div>
        ) : (
          // Affichage du formulaire
          <>
            <div
              className="modal-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ margin: 0 }}>Créer une boutique sur Alonouzo</h2>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>
            </div>

            {error && (
              <div
                className="error-message"
                style={{
                  color: "red",
                  padding: "10px",
                  marginBottom: "15px",
                  backgroundColor: "rgba(255, 0, 0, 0.05)",
                  borderRadius: "4px",
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <FormField
                label="Nom"
                value={formData.nom}
                onChange={(value) => handleChange("nom", value)}
                required
              />

              <FormField
                label="Prénoms"
                value={formData.prenoms}
                onChange={(value) => handleChange("prenoms", value)}
                required
              />

              <FormField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => handleChange("email", value)}
                required
              />

              <FormField
                label="Profession"
                value={formData.profession}
                onChange={(value) => handleChange("profession", value)}
                required
              />

              <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Pourquoi voulez-vous créer une boutique sur Alonouzo?
                </label>
                <textarea
                  value={formData.raison}
                  onChange={(e) => handleChange("raison", e.target.value)}
                  className="form-control"
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#f2f2f2",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="custom_btn"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Soumettre
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalForm;
