import React, { useState } from "react";
import { AvaliationInterface } from "interfaces/Avaliations/AvaliationInterface";
import { AvaliationItemInterface } from "interfaces/Avaliations/AvaliationItemInterface";
import { AvaliationService } from "services/Avaliations/AvaliationService";
import { Card, Rate, Button, Modal, List, Typography, Input } from "antd";
const { Text } = Typography;

export const AssessmentsCard = ({
  assessment,
}: {
  assessment: AvaliationInterface;
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal para avaliação
  const [isModalVisibleView, setIsModalVisibleView] = useState(false); // Modal para visualização das avaliações
  const [avaliationItems, setAvaliationItems] = useState<
    AvaliationItemInterface[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState<number>(0); // Estado para armazenar a nota da avaliação
  const [userComment, setUserComment] = useState<string>(""); // Estado para armazenar o comentário
  const avaliationService = new AvaliationService();

  // Função para exibir as avaliações
  const handleViewClick = async () => {
    setIsModalVisibleView(true); // Abre o modal de visualização
    setLoading(true);

    try {
      const items = await avaliationService.GetAvaliationComments(
        assessment.idLocalAvaliation
      );
      setAvaliationItems(items);
    } catch (error) {
      console.error("Erro ao buscar itens da avaliação:", error);
      setAvaliationItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Função para fechar o modal de avaliação
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setUserRating(0); // Limpar o estado da nota ao fechar o modal
    setUserComment(""); // Limpar o estado do comentário
  };

  // Função para fechar o modal de visualização
  const handleCloseModalView = () => {
    setIsModalVisibleView(false);
  };

  // Função para enviar a avaliação
  const handleSubmitAvaliation = async () => {
    if (userRating && userComment.trim()) {
      const newAvaliation: AvaliationItemInterface = {
        avaliationGivenByUser: userComment,
        avaliationRating: userRating,
        user: getLoggedUser(),
        dateAvaliation: new Date(),
        avaliationLocal: assessment,
      };

      try {
        await avaliationService.CreateAvaliationItem(newAvaliation);
        handleCloseModal();
        setAvaliationItems((prevItems) => [
          ...prevItems,
          {
            ...newAvaliation,
            user: getLoggedUser(),
            dateAvaliation: new Date(),
            avaliationLocal: assessment,
            avaliationRating: userRating,
          },
        ]);
      } catch (error) {
        console.error("Erro ao enviar avaliação:", error);
      }
    } else {
      alert("Por favor, forneça uma avaliação e um comentário.");
    }
  };

  // Função para pegar o usuário logado
  const getLoggedUser = () => {
    const user = localStorage.getItem("loggedUser");
    return user ? JSON.parse(user) : null; // Retorna o usuário ou null caso não exista
  };

  return (
    <>
      <Card
        bodyStyle={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        cover={
          <img
            alt={assessment.name}
            src={assessment.imageAvaliationLocal}
            style={{ height: 200 }}
          />
        }
        style={{ width: 240 }}
      >
        <h3>{assessment.name}</h3>
        <Rate value={assessment.avaliationRating} disabled />
        <div style={{ marginTop: 16, display: "flex", alignItems: "center" }}>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={handleViewClick}
          >
            Ver
          </Button>
          <Button type="default" onClick={() => setIsModalVisible(true)}>
            Avaliar
          </Button>
        </div>
      </Card>

      <Modal
        title="Avaliar Local"
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitAvaliation}>
            Enviar Avaliação
          </Button>,
        ]}
      >
        <div style={{ marginBottom: 16 }}>
          <Text strong>{assessment.name}</Text>
        </div>

        <div style={{ marginBottom: 16 }}>
          <Rate
            allowHalf
            value={userRating}
            onChange={(value) => setUserRating(value)}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <Text>Comentário</Text>
          <Input.TextArea
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            rows={4}
          />
        </div>
      </Modal>

      {/* Modal para Visualizar as Avaliações */}
      <Modal
        title="Avaliações feitas"
        open={isModalVisibleView}
        onCancel={handleCloseModalView}
        footer={null}
      >
        {loading ? (
          <p>Carregando avaliações...</p>
        ) : (
          <List
            dataSource={avaliationItems}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <div>
                      <Text strong>{item.user.nameUser}</Text>{" "}
                      <Text style={{ marginLeft: 16, color: "#888" }}>
                        ({new Date(item.dateAvaliation).toLocaleDateString()})
                      </Text>{" "}
                    </div>
                  }
                  description={
                    <>
                      <div style={{ marginBottom: 8 }}>
                        <Rate
                          allowHalf
                          value={item.avaliationRating}
                          disabled
                        />{" "}
                      </div>
                      <Text>{item.avaliationGivenByUser}</Text>{" "}
                    </>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Modal>
    </>
  );
};
