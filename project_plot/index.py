import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('./project_plot/sales_data.csv')

# Exibir as primeiras linhas do DataFrame
print(data.head())

# Criar um gráfico simples
plt.plot(data['Date'], data['Sales'], marker='o')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.title('Sales Data')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# Olhe a diferença entre o Python e o JavaScript
# É ridículo essa comparação